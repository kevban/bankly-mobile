import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const getIcon = (category) => {
    switch (category.iconId) {
        case 0: // daily
            return <MaterialIcons name="flare" size={24} color="white" />
        case 1: // Food
            return <MaterialIcons name="local-dining" size={24} color="white" />
        case 2: // transportation
            return <MaterialIcons name="directions-car" size={24} color="white" />
        case 3: //lodging
            return <MaterialIcons name="hotel" size={24} color="white" />
        case 4: //Telephone
            return <MaterialIcons name="local-phone" size={24} color="white" />
        case 5: // Entertainment
            return <MaterialIcons name="nightlife" size={24} color="white" />
        case 6: //medical
            return <MaterialIcons name="medical-services" size={24} color="white" />
        case 7: //school
            return <MaterialIcons name="school" size={24} color="white" />
        case 8: //travel
            return <MaterialIcons name="airplanemode-active" size={24} color="white" />
        case 9:
            return <MaterialIcons name="attach-money" size={24} color="white" />
        case 10:
            return <MaterialIcons name="pets" size={24} color="white" />
        case 11:
            return <MaterialIcons name="checkroom" size={24} color="white" />
        case 12:
            return <MaterialIcons name="local-laundry-service" size={24} color="white" />
        case 13:
            return <FontAwesome5 name="piggy-bank" size={24} color="white" />
        case 14:
            return <MaterialIcons name="fitness-center" size={24} color="white" />
        case 15:
            return <MaterialIcons name="credit-card" size={24} color="white" />
        case 16:
            return <MaterialIcons name="shopping-cart" size={24} color="white" />
        case 17:
            return <MaterialIcons name="card-giftcard" size={24} color="white" />
        case 18:
            return <MaterialIcons name="sports-esports" size={24} color="white" />
        case 19:
            return <FontAwesome5 name="diamond" size={24} color="white" />
        case -1:
            return
        default:
            return

    }
}

export default getIcon