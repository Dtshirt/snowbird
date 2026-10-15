import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `https://snowbird.carshippinghub.com${item.href}` : undefined
    }))
  };

  return (
    <div className="border-b border-slate-100 bg-slate-50">
      <nav aria-label="Breadcrumb" className="container-page py-3">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {i === items.length - 1 || !item.href ? (
                <span aria-current="page" className="font-medium text-slate-700">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brand-navy">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
