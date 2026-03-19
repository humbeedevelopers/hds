export async function getPageBySlug(slug) {
  const res = await fetch(
    "https://hdsadmin.humbeestudio.xyz/wp-json/wp/v2/pages?slug=services&acf_format=standard",
    // `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`,
    {
      next: { revalidate: 60 }, // ISR (VERY IMPORTANT)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page data");
  }

  const data = await res.json();
  return data[0]; // page object
}

// https://hdsadmin.humbeestudio.xyz/wp-json/wp/v2/pages?slug=services&acf_format=standard