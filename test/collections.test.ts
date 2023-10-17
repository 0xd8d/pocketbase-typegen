import {
  createCollectionEnum,
  createCollectionRecords,
  createCollectionResponses,
  createTypedPocketbase,
} from "../src/collections"

describe("createCollectionEnum", () => {
  it("creates enum of collection names", () => {
    const names = ["book", "magazine"]
    expect(createCollectionEnum(names)).toMatchSnapshot()
  })
})

describe("createCollectionRecords", () => {
  it("creates mapping of collection name to record type", () => {
    const names = ["book", "magazine"]
    expect(createCollectionRecords(names)).toMatchSnapshot()
  })
})

describe("createCollectionResponses", () => {
  it("creates mapping of collection name to response type", () => {
    const names = ["book", "magazine"]
    expect(createCollectionResponses(names)).toMatchSnapshot()
  })
})

describe("createTypedPocketBase", () => {
  it("creates typed variant of PocketBase client", () => {
    const names = ["book", "magazine"]
    expect(createTypedPocketbase(names)).toMatchSnapshot()
  })
})
