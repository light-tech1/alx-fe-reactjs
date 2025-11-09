const UserProfile = (props) => {
  return (
    <div style={{
      border: '2px solid gray',
      padding: '15px',
      margin: '15px auto',
      width: '250px',
      borderRadius: '10px',
      backgroundColor: '#f0f8ff'
    }}>
      
      <h2 style={{ color: 'blue', fontSize: '22px' }}>
        {props.name}
      </h2>

      <p style={{ fontSize: '18px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>

      <p style={{ fontStyle: 'italic' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
