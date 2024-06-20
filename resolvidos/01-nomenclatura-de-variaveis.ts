// Nomenclatura de variáveis

const categoryTypeList = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getClassificationByUserName(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const userData = await response.json()

  const categorySortedByFollowers = categoryTypeList.sort((categoryA, categoryB) => categoryA.followers - categoryB.followers);

  const userCategory = categorySortedByFollowers.find(category => userData.followers > category.followers)

  const result = {
    username,
    category: userCategory.title
  }

  return result
}

getClassificationByUserName({
  query: {
    username: 'josepholiveira'
  }
}, {})