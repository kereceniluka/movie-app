import {
    StyledCard,
    StyledImage,
    StyledCardBody,
    StyledCardTitle,
} from './CastCardStyle';

// bootstrap
import { Card } from 'react-bootstrap';

// assets
import noImagePlaceholder from '../../assets/images/no-image-placeholder.svg';

const CastCard = ({ name, profile_path, character }) => {
    return (
        <StyledCard>
            <StyledImage variant="top" src={profile_path ? `${process.env.REACT_APP_TMDB_IMAGES_URL_W500}${profile_path}` : noImagePlaceholder} />
            <StyledCardBody>
                <StyledCardTitle>{name}</StyledCardTitle>
                <Card.Text>{character}</Card.Text>
            </StyledCardBody>
        </StyledCard>
    );
}

export default CastCard;
