import { SectionData } from '@/types/Section.type';
import aPropos from '@/assets/pages/comedie-musicale/images/apropos.jpg';
import scenesClefs from '@/assets/pages/comedie-musicale/images/scenesclefs.jpg';

export const aProposSection: SectionData = {
  key: 'Section APropos',
  pages: [{
    title: 'A propos',
    paragraphs: [
      'Les Misérables est une comédie musicale basée sur le roman éponyme de Victor Hugo. Une première version a été créée en 1980, puis présentée pour la première fois à Londres en 1985.',
      'Elle a été jouée ensuite dans de nombreux pays à travers le monde et traduite dans plusieurs langues. Elle revient à Paris en 1991 au théâtre Mogador et s\'exporte à Montréal et reçoit un accueil enthousiaste du public et de la critique. Le spectacle a depuis traversé le monde entier, Belgique, Suisse, Allemagne, Australie, Etats-Unis, Quebec, etc.',
      'La comédie musicale originelle est connue pour ses chansons épiques et mémorables, telles que « J\'avais rêvé », « Mon histoire » et « Comme un homme». Elle a remporté de nombreux prix et est considérée comme l\'une des comédies musicales les plus populaires et les plus appréciées de tous les temps.',
    ],
  }],
  image: {
    image: aPropos,
    alt: 'Jean Valjean au tribunal ORPM',
    style: { objectPosition: '60% 50%' },
  },
};

export const sceneClefsAlternativeSection: SectionData = {
  key: 'AlternativeSection sceneClefs',
  pages: [{
    title: 'Dix scènes clefs',
    paragraphs: [
      'OUVERTURE\n L\'ouverture de la comédie musicale «Les Misérables» met en scène la sorite du bagne de Jean Valjean, un forçat condamné pour avoir volé du pain pour nourrir sa famille.',
      'LIBERTÉ SURVEILLÉE\n Valjean est libéré après 19 ans de prison, mais il est poursuivi par l\'inspecteur Javert, qui le considère comme un criminel incurable.',
      'RENCONTRE\n Valjean rencontre Fantine, une jeune femme qui a été renvoyée de son travail et qui est sur le point de se prostituer pour survivre. Valjean promet de s\'occuper de sa fille, Cosette, et de la protéger.',
      'FUITE\n Valjean et Cosette s\'installent à Paris et vivent une vie paisible jusqu\'à ce que Javert les retrouve. Valjean doit fuir de nouveau pour protéger Cosette et sa propre liberté.',
      'RÉVOLTE\n Pendant ce temps, le peuple de Paris se révolte contre le régime autoritaire de Louis-Philippe, et Thénardier profite de la situation pour voler et exploiter les sans-abri.',
      'RÉVOLUTION\n Valjean se retrouve impliqué dans la révolution et rencontre Enjolras, le leader des insurgés. Il découvre que Marius, un jeune étudiant, est amoureux de Cosette.',
      'PROMESSE\n Valjean révèle à Marius l\'histoire de sa vie et lui demande de protéger Cosette en cas de danger. Marius accepte, mais Valjean doit quitter Paris pour protéger sa propre vie.',
      'ÉCHEC\n La révolution échoue et les insurgés sont tués, y compris Enjolras. Marius est gravement blessé et Valjean le sauve en l\'emmenant loin de la bataille.',
      'AVEUX\n Valjean confie Cosette à Marius et lui avoue qu\'il est en réalité Jean Valjean, le forçat condamné. Marius lui pardonne et lui demande de rester avec eux.',
      'PAIX\n Valjean décide de partir pour mourir en paix, mais Javert le retrouve une dernière fois. Javert ne peut accepter que Valjean ait changé et ait accompli de bonnes actions, et il se suicide plutôt que de vivre avec cette contradiction. Valjean meurt peu de temps après, en paix avec lui-même et avec les autres.',
    ],
    style: { alignSelf: 'center' },
  }],
  image: {
    image: scenesClefs,
    alt: 'Les scènes clés - Les Miserables "C\'est la faute à Voltaire" ORPM',
  },
};
