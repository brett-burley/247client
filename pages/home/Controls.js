import { plus, minus, times, sum, multiply, subtract, divide, back, forward } from '../../components/icons/Icons';
import Timer from './Timer';

const numbers = [2,9,1,6];

export default function Controls()
{
  return (
    <div className="py-5 px-3 h-full flex flex-col gap-2 border-solid border-2 border-cyan-300 rounded divide-y divide-solid">
      <div className="h-2/6">
        <Operators />
      </div>
      <div className="h-3/6">
        <Numbers />
      </div>
      <div className="h-1/6">
        <Move />
      </div>
    </div>
  );
}

function Operators()
{
  return (
    <div className="h-full grid grid-cols-4 gap-2">
        <button className="btn btn-gray">
          {sum}
        </button>
        <button className="btn btn-gray">
          {subtract}
        </button>
        <button className="btn btn-gray">
          {multiply}
        </button>
        <button className="btn btn-gray">
          {divide}
        </button>
        <button className="btn btn-gray">
          {plus}
        </button>
        <button className="btn btn-gray">
          {minus}
        </button>
        <button className="btn btn-gray">
          {times}
        </button>
        <button className="btn btn-gray">
          \
        </button>
    </div>
  );
}

function Numbers()
{
  const btns = numbers.map((num, i) => {
    return (
      <button key={i} className="btn btn-blue">
        {num}
      </button>
    )
  })

  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      {btns}
    </div>
  );
}

function Move()
{
  return (
    <div className="h-full flex flex-1 items-center justify-between">
      <button className="btn btn-gray">
        {back}
      </button>

      <Timer />

      <button className="btn btn-gray">
        {forward}
      </button>
    </div>
  );
}
