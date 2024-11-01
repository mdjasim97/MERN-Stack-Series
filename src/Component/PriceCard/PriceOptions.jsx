import PriceOption from "./PriceOption";


const PriceOptions = () => {
    const priceOptions = [{
        "id": 1,
        "name": "Basic Membership",
        "price": 50,
        "features": [
            "Gym access",
            "Locker room",
            "1 fitness class/week"
        ]
    },
    {
        "id": 2,
        "name": "Premium Membership",
        "price": 80,
        "features": [
            "Gym access",
            "Locker room",
            "Unlimited classes",
            "1 personal training session"
        ]
    },
    {
        "id": 3,
        "name": "Corporate Membership",
        "price": 120,
        "features": [
            "Gym access",
            "Locker room",
            "Unlimited classes",
            "1 personal training session",
            "Discounted rates for employees"
        ]
    }
    ]

    return (
        <div>
            <h2 className="text-4xl">Best Price for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;