import Spinner from 'react-bootstrap/Spinner';
export default function LoadingBox() {
	return (
		<Spinner animations='border' role='status'>
			<span className='visually-hidden'>Loading....</span>
		</Spinner>
	);
}