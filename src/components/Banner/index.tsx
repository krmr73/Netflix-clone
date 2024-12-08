import { useProps } from "./useProps";
import { Layout } from "./Layout";

export const Banner = () => {
    const props = useProps();
    console.log(props);
    return (
        <div>
            <Layout movie={props.movie} truncate={props.truncate} />
        </div>

    );
};
