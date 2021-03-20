import { useState } from 'react';
import {
    StyledAvatar,
} from './ReviewCardStyle';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

// bootstrap
import { Card, Button } from 'react-bootstrap';

const ReviewCard = ({ author, author_details, content, created_at, maxCharacters = 300 }) => {

    const [isTruncated, setIsTruncated] = useState(true);

    const truncatedContent = isTruncated && content.length > maxCharacters ? content.slice(0, maxCharacters).concat('...') : content;

    const handleIsTruncated = () => {
        setIsTruncated(!isTruncated);
    }

    return (
        <Card className="w-100 my-3">
            <Card.Body className="w-100 d-flex flex-column align-items-start justify-content-start">
                <div className="d-flex align-items-center justify-content-start">
                    <IconContext.Provider value={{ size: '56px', color: '#b2b2b2' }}>
                        {author_details?.avatar_path !== null ? (
                            author_details?.avatar_path.startsWith('/https') ? <StyledAvatar src={author_details?.avatar_path.substring(1)} roundedCircle /> : <StyledAvatar src={`${process.env.REACT_APP_TMDB_IMAGES_URL}${author_details?.avatar_path}`} roundedCircle />
                        ) : <FaUserCircle />}
                    </IconContext.Provider>
                    <span className="ml-2">
                        <Card.Title className="font-weight-bold">{author}</Card.Title>
                        <Card.Subtitle>{new Date(created_at).toLocaleDateString("en-GB")}</Card.Subtitle>
                    </span>
                </div>
                <Card.Text className="py-4">{truncatedContent}</Card.Text>
                {content.length > maxCharacters && <Button style={{ backgroundColor: '#FCA311', borderColor: '#FCA311' }} size="sm" onClick={handleIsTruncated}>{isTruncated ? 'Read More' : 'Read Less'}</Button> }
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;
