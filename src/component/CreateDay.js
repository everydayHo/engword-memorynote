import { useNavigate } from 'react-router';
import useFetch from '../hooks/useFetch';

export default function CreateDay() {
  const days = useFetch('http://localhost:3000/days');
  const navigate = useNavigate();

  function addDay() {
    fetch(`http://localhost:3000/days/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('저장완료!');
        navigate(`/`);
      }
    });
  }

  return (
    <div>
      <h3>전체 일수: {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
