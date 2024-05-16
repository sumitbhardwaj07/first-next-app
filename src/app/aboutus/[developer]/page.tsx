


function DeveloperPage({ params }: {
  params: {developer: string}
}) {
  
  const { developer } = params;

    return <h1>{developer}</h1>
  }
  
  export default DeveloperPage;