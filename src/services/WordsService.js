const words = [
	"inhabitants",
	"heir",
	"remain",
	"hope",
	"hello",
	"swollen",
	"blister",
	"ankle",
	"normal",
	"lungs",
	"bleed",
	"aid",
	"suite",
	"api",
	"pills"
];

function getWords() {	
	return words.sort();
}

function getLastWords(items) {	
	console.log("🚀 ~ file: WordsService.js ~ line 25 ~ getLastWords ~ words.length-10", words.length, items)
	return words.slice(words.length-items, words.length).sort();
}

async function getDefinition(newWord) {
	try {
		const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`;
		const res = await fetch(API_URL);
		const response = await res.json();
		if (Array.isArray(response)) {
			if (response.length >= 1) {
				let result = processDeFinitionArray(response);
				console.log(result);
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
		let res = phonetics.audios.concat(oldValue.audios);
		phonetics.audios = res.reduce((acc, item) => {
			if (!acc.some((e) => e.audio === item.audio)) {
				acc.push(item);
			}
			return acc;
		}, []);
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

export { getWords, getLastWords, getDefinition };
