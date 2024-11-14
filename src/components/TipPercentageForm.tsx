const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

interface TipProps {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
}

export default function TipPercentageForm({ setTip, tip }: TipProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div className="flex gap-2" key={tipOption.id}>
            <label htmlFor={tipOption.id}> {tipOption.label} </label>
            <input
              type="radio"
              name="tip"
              value={tipOption.value}
              id={tipOption.id}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
