export default function Starts({ items }) {
    if (!items.length) return (
        <p className="stats">
            <span>Start adding some items to your packing list🛩</span>
        </p>
    );


    const numItems = items.length;
    const nunPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((nunPacked / numItems) * 100);

    return <footer className="stats">
        <span>
            {percentage === 100 ? "You got everything! Ready to go ✈" :
                `You have ${numItems} items on your list, and you already packed ${nunPacked} (${percentage}%)`}

        </span>
    </footer>;
}
