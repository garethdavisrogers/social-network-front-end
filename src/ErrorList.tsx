import './App.css'

type ErrorListProps = {
    errors: string[];
}

function ErrorList({errors}: ErrorListProps) {

    const errorList = errors.map((e)=><li key={e}>{e}</li>);

    return (
        <>
            <ul>{errorList}</ul>   
        </>
    )
}

export default ErrorList;
