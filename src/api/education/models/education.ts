export default {
  kind: 'collectionType',
  collectionName: 'educations',
  info: { singularName: 'education', pluralName: 'educations', displayName: 'Education' },
  options: { draftAndPublish: false },
  attributes: {
    title: { type: 'string', required: true },
    description: { type: 'text' },
    order: { type: 'integer', default: 0 },
  },
};