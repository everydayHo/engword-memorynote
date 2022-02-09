import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Word from './Word';

export default function Day() {
  const a = useParams();
  const day = a.day;
  const words = useFetch(`http://localhost:3000/words?day=${day}`);
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
