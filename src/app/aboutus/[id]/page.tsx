function DeveloperPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const details = [
    { id: '1', name: 'Yash', role: 'Senior Developer' },
    { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
    { id: '3', name: 'Suresh', role: 'Frontend Developer' }
  ];

  const member = details.find(member => member.id === id);

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default DeveloperPage;
