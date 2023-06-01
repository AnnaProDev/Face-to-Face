export let updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
	return items.map((user: any) => {
	if (user[objPropName] === itemId) {
		return {...user, ...newObjProps}
	}
	return user;
})
}