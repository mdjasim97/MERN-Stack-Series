

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 hover:bg-green-500 p-2">
                <a href={route.path} className="">{route.name}</a>
            </li>

        </div>
    );
};

export default Link;