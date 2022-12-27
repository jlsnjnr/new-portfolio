import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { useAboutMe } from '../context/AboutMeContext';

export const AboutMe = () => {
  const { isOpen, onClose } = useAboutMe();

  return (
    <>
      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore distinctio autem quod itaque numquam libero error, blanditiis molestias quidem earum, iure asperiores tempore laboriosam culpa quia, magnam fuga dolor voluptatum.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}