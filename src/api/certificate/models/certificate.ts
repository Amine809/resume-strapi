export default {
  kind: 'collectionType',
  collectionName: 'certificates',
  info: { singularName: 'certificate', pluralName: 'certificates', displayName: 'Certificate' },
  options: { draftAndPublish: false },
  attributes: {
    title: { type: 'string', required: true },
    issuer: { type: 'string', required: true },
    description: { type: 'string' },
    certificateUrl: { type: 'string', required: true },
    image: { type: 'media', multiple: false },
    order: { type: 'integer', default: 0 },
  },
};
