export default {
  kind: 'collectionType',
  collectionName: 'works',
  info: { singularName: 'work', pluralName: 'works', displayName: 'Work' },
  options: { draftAndPublish: false },
  attributes: {
    title: { type: 'string', required: true },
    client: { type: 'string' },
    image: { type: 'media', multiple: false },
    slug: { type: 'string' },
    link: { type: 'string' },
    technologies: { type: 'string' },
    order: { type: 'integer', default: 0 },
  },
};