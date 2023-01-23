function Person({ firstName, lastName, img, email }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}
export default Person;
