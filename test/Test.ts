import assert from "assert";
import { 
  TestHelpers,
  SiloFactory_Approval
} from "generated";
const { MockDb, SiloFactory } = TestHelpers;

describe("SiloFactory contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for SiloFactory contract Approval event
  const event = SiloFactory.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("SiloFactory_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await SiloFactory.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualSiloFactoryApproval = mockDbUpdated.entities.SiloFactory_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedSiloFactoryApproval: SiloFactory_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualSiloFactoryApproval, expectedSiloFactoryApproval, "Actual SiloFactoryApproval should be the same as the expectedSiloFactoryApproval");
  });
});
