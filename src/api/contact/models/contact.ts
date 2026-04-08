export default {
  kind: 'singleType',
  collectionName: 'contact',
  info: { singularName: 'contact', pluralName: 'contacts', displayName: 'Contact' },
  options: { draftAndPublish: false },
  attributes: {
    email: { type: 'email' },
    phone: { type: 'string' },
    github: { type: 'string' },
    githubLabel: { type: 'string' },
    linkedin: { type: 'string' },
    facebook: { type: 'string' },
    dribbble: { type: 'string' },
    website: { type: 'string' },
  },
};