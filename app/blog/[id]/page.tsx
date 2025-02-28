export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Page ${params.id}`,
    description: `Description for page ${params.id}`,
  };
} 