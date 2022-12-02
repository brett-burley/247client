const { readFileSync } = require('node:fs');

const questions = readQuestions();


function getQuestions(index)
{
  try {
    const questions = questions[index];
    return questions;
  } catch(err) {
    return [];
  }
}


async function readQuestions()
{
  const data = await readFileSync('../../data/questions/allQuestions.json');
  return JSON.parse(data);
}


module.exports = { getQuestions };
