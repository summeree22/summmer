const textarea = document.getElementById('text');
const changeWord = document.getElementById('changed-word');
const targetWord = document.getElementById('target-word');
const submit = document.getElementById('submit');
const result = document.getElementById('new-text');

function changeText (text, word, newWord) {
	const words = text.split(" ");
	
	const changedWords = words.map(_word => {
		return _word === _word ? newWord : _word
	})
	const changedText = changedWords.join(" ")
	return changedText
}

const onClickSubmit = (e) => {
	const text = textarea.value
	const word = targetWord.value
	const newWord = changeWord.value
	
	result.value = changeText(text,word,newWord)
}

submit.addEventListner('click',onClickSubmit)