export default {
    name: 'blog',
    type: 'document',
    title: `Anwit's blog`,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime'
      }
    ]
  }