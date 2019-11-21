import axios from 'axios';
import {IP_ADDR} from "../config/Constants";


export async function postChat(
  {
    author = 'anon',
    message = '...'
  } = {}
) {
  return await axios.post(`${IP_ADDR}/chat`, {
    author, message
  });
}
