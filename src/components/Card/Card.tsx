import { Box } from '@suid/material';

import { profile, reactBlog } from '../../assets/images';
type Props = {
  title: string;
  description: string;
};
const Card = (props: Props) => {
  const navigateBlog = () => {
    // eslint-disable-next-line no-console
    console.log('first');
  };
  return (
    <Box sx={{ marginTop: '10px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '10px',
          borderBottom: '1px solid #F2F2F2',
        }}
      >
        <Box sx={{ padding: '10px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '10px',
            }}
          >
            <img src={profile} alt={profile} style={{ width: '5%' }} />
            <h3>Suneel Chauhan</h3>
            <h3 style={{ color: 'gray' }}>Aug 3</h3>
          </Box>
          <h1 style={{ 'font-weight': '600', 'font-size': '18px' }}>
            {props.title}
          </h1>
          <p>{props.description}</p>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              color: 'gray',
              cursor: 'pointer',
              margin: '10px 0px',
              fontSize: '14px',
            }}
            onClick={navigateBlog}
          >
            <h4
              style={{
                color: 'black',
                background: '#F2F2F2',
                width: 'fit-content',
                padding: '2px 10px',
                'border-radius': '40px',
              }}
            >
              React
            </h4>
            <h4>4 min Read .</h4>
            <h4> Selected for you</h4>
          </Box>
        </Box>
        <Box onClick={navigateBlog} sx={{ border: '1px solid black' }}>
          <img
            src={reactBlog}
            alt={reactBlog}
            style={{
              width: '150px',
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
