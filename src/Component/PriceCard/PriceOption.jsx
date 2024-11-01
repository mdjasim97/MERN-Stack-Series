
import Features from './Features';

const PriceOption = ({ option }) => {
    // console.log(option)
    const { name, price, features } = option
    return (
        <div className='bg-green-500 p-4 flex flex-col rounded-md'>
            <h1 className='text-5xl md:text-6xl font-extrabold text-center'><span>{price}</span>
                <span className='text-2xl'>/mon</span></h1>
            <h4 className='text-3xl text-center'>{name}</h4>
            <div className='mt-6 text-white flex-grow'>
                {
                    features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
            <button className='btn bg-green-700 w-full text-white hover:bg-green-400 my-2 md:text-2xl'>BUY NOW</button>
        </div>
    );
};

PriceOption.proptypes = {
    
}

export default PriceOption;