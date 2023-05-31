import { FaSpinner } from 'react-icons/fa';
import useJsonFetch from '../../hooks/useJsonFetch';

function LoadingComponent() {
    const { data, loading, error } = useJsonFetch(process.env.REACT_APP_LOADING_URL, []);
    return (
        <div className="data data-loading">
            <h3>Loading Request</h3>
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

export default LoadingComponent;
