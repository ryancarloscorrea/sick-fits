import {ListAccessArgs} from "./types";
import {permissionsList} from "./schemas/fields";

export function isSignedIn({session}: ListAccessArgs) {
    return !!session
}

const generatedPermissions = Object.fromEntries(permissionsList.map(permission => [permission, function ({session}: ListAccessArgs) {
    return session?.data.role?.[permission]
}]));
export const permissions = {
    ...generatedPermissions,
    isAwesome({session}: ListAccessArgs) {
        return session?.data.name.includes('Ryan')
    }
}

export const rules = {
    canManageProducts({session}) {
        if(!isSignedIn({session})) {
            return false
        }
        if(permissions.canManageProducts({session})) {
            return true
        }
        return {user: {id: session.itemId}}
    },
    canOrder({session}) {
        if(!isSignedIn({session})) {
            return false
        }

        if(permissions.canManageCart({session})) {
            return true
        }
        return {user: {id: session.itemId}}
    },
    canManageOrderItems({session}) {
        if(!isSignedIn({session})) {
            return false
        }
        if(permissions.canManageCart({session})) {
            return true
        }
        return {order: {user: {id: session.itemId}}}
    },
    canReadProducts({session}: ListAccessArgs) {
        if(permissions.canManageProducts({session})) {
            return true
        }
        return {status: 'AVAILABLE'}
    },
    canManageUsers({session}) {
        if(!isSignedIn({session})) {
            return false
        }

        if(permissions.canManageUsers({session})) {
            return true
        }
        return {id: session.itemId}
    },

}
