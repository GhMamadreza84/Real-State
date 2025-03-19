import BuyResidentialPage from "@/template/BuyResidentialPage";

const BuyResidential = async ({ searchParams }) => {
  // This method is not recommended use it only when your API route is a foreign API route.
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialPage data={finalData} />;
};

export default BuyResidential;

