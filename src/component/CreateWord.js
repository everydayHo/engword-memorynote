import useFetch from '../hooks/useFetch';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateWord() {
  const days = useFetch('http://localhost:3000/days');
  const navigate = useNavigate();
  const [isLoding, setisLoding] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoding) {
      setisLoding(true);
      fetch(`http://localhost:3000/words/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('저장완료!');
          navigate(`/day/${dayRef.current.value}`);
          setisLoding(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="영단어를 써주세요" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="뜻을 적으세요" ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onSubmit} style={{ opacity: isLoding ? 0.3 : 1 }}>
        {isLoding ? 'Saving...' : '저장'}
      </button>
    </form>
  );
}
