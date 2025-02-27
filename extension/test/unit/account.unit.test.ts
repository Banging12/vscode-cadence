import { Account } from '../../src/emulator/account'
import { ASSERT_EQUAL } from './test-utils'

describe('Account Unit Test', () => {
  it('Tests creation new accounts', () => {
    const a1 = new Account('Foo', '0x1')
    a1.setIndex(2)

    ASSERT_EQUAL(a1.address, '0x1')
    ASSERT_EQUAL(a1.name, 'Foo')
    ASSERT_EQUAL(a1.getName(), a1.name)
    ASSERT_EQUAL(a1.fullName(), `${a1.name} (${a1.address})`)
    ASSERT_EQUAL(a1.index, 2)

    ASSERT_EQUAL(a1.getAddress(), '0x1')
    ASSERT_EQUAL(a1.getAddress(false), '1')

    a1.address = '1'
    ASSERT_EQUAL(a1.getAddress(), '0x1')
    ASSERT_EQUAL(a1.getAddress(false), '1')
  })
})
