export default function HomePage() {
  // 1. On crée une liste de liens "en dur" (statique) pour l'affichage.
  const staticLinks = [
    { id: 1, url: 'https://nextjs.org/docs' },
    { id: 2, url: 'https://github.com' },
    { id: 3, url: 'https://vercel.com/dashboard' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-50">
      
      {/* Titre de l'application */}
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        Rakoono Links
      </h1>

      {/* 2. On ajoute le champ de texte et le bouton pour créer un lien */}
      <div className="flex w-full max-w-lg mb-8">
        <input
          type="text"
          placeholder="Ajouter un nouveau lien..."
          className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors">
          Enregistrer
        </button>
      </div>

      {/* 3. On affiche la liste des liens statiques */}
      <div className="w-full max-w-lg bg-white rounded-md shadow-md">
        <ul className="divide-y divide-gray-200">
          {/* C'est ici que React parcourt notre liste et crée un élément <li> pour chaque lien */}
          {staticLinks.map((link) => (
            <li key={link.id} className="p-4 text-gray-700 hover:bg-gray-50">
              {link.url}
            </li>
          ))}
        </ul>
      </div>

    </main>
  );
}
