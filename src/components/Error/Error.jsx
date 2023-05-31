import { FaSpinner } from 'react-icons/fa';
import useJsonFetch from '../../hooks/useJsonFetch';

function ErrorComponent() {
    const { data, loading, error } = useJsonFetch(process.env.REACT_APP_ERROR_URL, []);
    return (
        <div className="data data-error">
            <h3>Error Request</h3>
            {loading ? (
            <div className='loader'>
                <FaSpinner className='spin' />
            </div>
                ) : (
                <div>{data.status}</div>
                )}
            {error && <p className='error'>{error}</p>}
        </div>
    );
}

export default ErrorComponent;
