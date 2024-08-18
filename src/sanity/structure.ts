import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const prodStructure: StructureResolver = (S) => S.list()
  .title('Blog - Production')
  .items([
    S.documentTypeListItem('post').title('Articles'),
    S.documentTypeListItem('category').title('Catégories'),
    S.documentTypeListItem('author').title('Auteurs'),
    S.divider(),
    ...S.documentTypeListItems().filter(
      (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
    ),
  ]);

export const devStructure: StructureResolver = (S) => S.list()
  .title('Blog - Development')
  .items([
    S.documentTypeListItem('post').title('Articles'),
    S.documentTypeListItem('category').title('Catégories'),
    S.documentTypeListItem('author').title('Auteurs'),
    S.divider(),
    ...S.documentTypeListItems().filter(
      (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
    ),
  ]);
