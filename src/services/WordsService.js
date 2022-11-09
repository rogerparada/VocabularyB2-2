const words = [
	{ word: "inhabitants", u: 1 },
	{ word: "heir", u: 1 },
	{ word: "remain", u: 1 },
	{ word: "hope", u: 1 },
	{ word: "frightening", u: 1 },
	{ word: "afraid", u: 1 },
	{ word: "awkward", u: 1 },
	{ word: "concerned", u: 1 },
	{ word: "produce", u: 1 },
	{ word: "setup", u: 1 },
	{ word: "unprivileged", u: 1 },
	{ word: "contagion", u: 1 },
	{ word: "either", u: 1 },
	{ word: "stubborn", u: 1 },
	{ word: "wether", u: 1 },
	{ word: "toughest", u: 1 },
	{ word: "selfish", u: 1 },
	{ word: "genuine", u: 1 },
	{ word: "spot", u: 1 },
	{ word: "spooky", u: 1 },
	{ word: "halves", u: 1 },
	{ word: "swollen", u: 1 },
	{ word: "blister", u: 1 },
	{ word: "ankle", u: 1 },
	{ word: "bleed", u: 1 },
	{ word: "aid", u: 1 },
	{ word: "stretcher", u: 1 },
	{ word: "leaning", u: 1 },
	{ word: "scruffy", u: 1 },
	{ word: "seizure", u: 1 },
	{ word: "symmetrical", u: 1 },
	{ word: "unreachable", u: 1 },
	{ word: "harm", u: 1 },
	{ word: "seldom", u: 1 },
	{ word: "wish", u: 1 },
	{ word: "entrepreneur", u: 1 },
	{ word: "races", u: 1 },
	{ word: "skydiver", u: 1 },
	{ word: "bias", u: 1 },
	{ word: "regardless", u: 1 },
	{ word: "suede", u: 1 },
	{ word: "deaf", u: 3 },
	{ word: "night-shift", u: 3 },
	{ word: "customs", u: 3 },
	{ word: "aisle", u: 3 },
	{ word: "bumped", u: 3 },
];

function getWords() {
	return words.sort();
}

function getUnitWords(unit = 1) {
	return words.sort().filter((x) => x.u === unit);
}

function getLastWords(items) {
	return words.slice(words.length - items, words.length).sort();
}

async function getDefinition(newWord) {
	try {
		const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`;

		const res = await fetch(API_URL);
		const response = await res.json();

		if (Array.isArray(response)) {
			if (response.length >= 1) {
				let result = processDeFinitionArray(response);
				return result;
			}
		} else {
			return Promise.reject(`Error loading word ${newWord}`);
		}
	} catch (error) {
		return Promise.reject(`Error loading word ${newWord}\n${error}`);
	}
}

function processDeFinitionArray(defArray) {
	let word = "";
	let phonetic = "";
	let meanings = [];
	let phonetics = [];

	try {
		defArray.forEach((item) => {
			word = item.word ? item.word : word;
			phonetic = item.phonetic ? item.phonetic : phonetic;
			if (Array.isArray(item.phonetics)) {
				phonetics = processPhonetics(item.phonetics, phonetics);
			}
			if (Array.isArray(item.meanings)) {
				meanings = meanings.concat(processMeaning(item.meanings));
			}
		});

		return {
			word,
			phonetic,
			meanings,
			phonetics,
		};
	} catch (error) {
		console.log("Error", error);
	}
}

function processPhonetics(pArray, oldValue) {
	let phonetics = {
		text: null,
		audios: [],
	};

	pArray.forEach((item) => {
		if (phonetics.text !== item.text) {
			phonetics.text = item.text;
		}

		if (item.audio !== "") {
			phonetics.audios.push({
				audio: item.audio,
				source: item.sourceUrl,
				license: item.license,
			});
		}
	});

	if (phonetics.text === oldValue.text) {
		try {
			let res = phonetics.audios.concat(oldValue.audios);
			phonetics.audios = res.reduce((acc, item) => {
				if (!acc.some((e) => e.audio === item.audio)) {
					acc.push(item);
				}
				return acc;
			}, []);
		} catch (error) {
			console.log("Error reading audios");
		}
	}

	return phonetics;
}

function processMeaning(meaningsArray) {
	const meanings = [];

	meaningsArray.forEach((item) => {
		meanings.push(item);
	});
	return meanings;
}

export { getWords, getUnitWords, getLastWords, getDefinition };
