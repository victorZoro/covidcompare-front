import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <i className="pi pi-thumbs-down-fill text-gray-600" style={{fontSize: '2rem'}} />
            <h1 className="text-indigo-500 font-[700] flex items-end gap-4">
                404 - Page Not Found
            </h1>
            <p className="text-gray-500 font-bold">
                The page you are looking for does not exist.
            </p>
            <Button
                size="large"
                label="Go Home"
                icon="pi pi-home"
                className="p-button-outlined"
                onClick={handleClick}
            />
        </div>
    );
}