import Link from "next/link";


function AboutUsPage() {

  const details = [
    { id: '1', name: 'Yash', role: 'Senior Developer' },
    { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
    { id: '3', name: 'Suresh', role: 'Frontend Developer' }
  ];

    return (
      <div>
      <h1>Our Developers</h1>
      <ul>
        {details.map(detail => (
          <li key={detail.id}>
            <Link href={`/aboutus/${detail.id}`}>
              <h3>{detail.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    )
  }
  
  export default AboutUsPage;