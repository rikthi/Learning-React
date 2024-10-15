function List(props) {
  const filteredList = props.eventsList.filter((event) => !event.joined);
  const events = filteredList.map((event) => (
    <li key={event.id}>
      {event.name}: &nbsp;{event.date}
    </li>
  ));

  return (
    <>
      <h2 className="list-category">{props.category}</h2>
      <ol className="list-events">{events}</ol>
    </>
  );
}

export default List;
