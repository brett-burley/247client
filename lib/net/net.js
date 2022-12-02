const axios = require('axios');

const http = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
});


getQuestions();


async function getQuestions()
{
  try {
    const date = getDateIndex();
    
    const res = await http.post('questions', { date });

    console.log(res.data);
  } catch(err) {
    console.error(err);
    return [];
  }
}


function getDateIndex()
{
  const date = new Date();
  const accumulatedDays = [0, 31,  59,  90, 120, 151, 181, 212, 243, 273, 304, 334];
  const year = date.getFullYear() - 2021;
  const month = accumulatedDays[date.getMonth()];
  const days = date.getDate();

  const index = year * month + days;
  return index.toString();
}
