async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        stage: 'DRAFT',
        slug,
      },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts (locales: id) {
        slug
        updatedAt
      }
    }
  `)
  return data.posts
}

export async function getAllPostsWithSlugEn() {
  const data = await fetchAPI(`
    {
      posts (locales: en) {
        slug
        updatedAt
      }
    }
  `)
  return data.posts
}

export async function getAllCategoriesWithSlug() {
  const data = await fetchAPI(`
    {
      categories {
        slug
        updatedAt
      }
    }
  `)
  return data.categories
}

export async function getAllLocationsWithSlug() {
  const data = await fetchAPI(`
    {
      speciesLocations {
        slug
        updatedAt
      }
    }
  `)
  return data.speciesLocations
}


export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      posts(orderBy: date_DESC, first: 2) {
        title
        slug
        excerpt
        date
        tags
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
        author {
          name
          picture {
            url(transformation: {
              image: {
                resize: {
                  width:100,
                  height:100,
                  fit:crop
                }
              }
            })
          }
        }
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }
    }
  `,
    { preview }
  )
  return data.posts
}

export async function getAllPostsForHomeEn(preview) {
  const data = await fetchAPI(
    `
    {
      posts(locales: en, orderBy: date_DESC, first: 2) {
        title
        slug
        excerpt
        date
        tags
        coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:crop,
                width:2000,
                height:1000
              }
            }
          })
        }
        author {
          name
          picture {
            url(transformation: {
              image: {
                resize: {
                  width:100,
                  height:100,
                  fit:crop
                }
              }
            })
          }
        }
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }
    }
  `,
    { preview }
  )
  return data.posts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(locales: id, stage: $stage, where: {slug: $slug}) {
        title
        slug
        cloudinaryImageLibrary
        content {
          html
        }
        reference {
          html
        }
        date
        updatedAt
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
        tags
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }
      morePosts: posts(locales: id, orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
        title
        slug
        excerpt
        date
        updatedAt
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
        tags
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  )
  return data
}

export async function getPostAndMorePostsEn(slug, preview) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(locales: en, stage: $stage, where: {slug: $slug}) {
        title
        slug
        cloudinaryImageLibrary
        content {
          html
        }
        reference {
          html
        }
        date
        updatedAt
        ogImage: coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
        tags
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }
      morePosts: posts(locales: en, orderBy: date_DESC, first: 2, where: {slug_not_in: [$slug]}) {
        title
        slug
        excerpt
        date
        updatedAt
        coverImage {
          url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
        }
        author {
          name
          picture {
            url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
          }
        }
        tags
        seo {
              title
              description
              keywords
              image {
                url
              }
            }
      }
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  )
  return data
}

export async function getCategory(slug, preview) {
  const data = await fetchAPI(
    `
    query MyQuery ($slug: String!, $stage: Stage!) {
      category (stage: $stage, where: {slug: $slug}) {
        title
        slug
        desription
      }
    }
    
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  )
  return data
}

export async function getLocation(slug, preview) {
  const data = await fetchAPI(
    `
      query LocationBySlug($slug: String!, $stage: Stage!) {
        speciesLocation(stage: $stage, where: {slug: $slug}) {
          title
          slug
          description
          map {
            longitude
            latitude
          }
        }  
    }
  `,
    {
      preview,
      variables: {
        stage: preview ? 'DRAFT' : 'PUBLISHED',
        slug,
      },
    }
  )
  return data
}