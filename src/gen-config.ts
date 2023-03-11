import { v4 as uuidv4 } from 'uuid';
import { COMMANDS, FluentBitBaseSchema, FluentBitSection } from './constants';
import { normalizeField } from './parser';
import { schemaToString } from './schemaToString';

const sectionBuilder = (command: COMMANDS) => (options: Record<string, string | boolean | number>) =>
  Object.entries(options).reduce<FluentBitSection>(
    (block, [key, value]) => {
      const attrName = normalizeField(key);
      const normValue = typeof value === 'boolean' ? (value ? 'On' : 'Off') : String(value);

      if (attrName === 'name') {
        return { ...block, name: normValue };
      }
      return {
        ...block,
        optional: { ...block.optional, [attrName]: normValue },
      };
    },
    {
      id: uuidv4(),
      command,
      optional: {},
    }
  );

export const SECTIONS = {
  output: sectionBuilder(COMMANDS.OUTPUT),
  // TODO: rest
};

export class FluentBitGeneratedSchema implements FluentBitBaseSchema {
  readonly schema;

  constructor(sections: FluentBitSection[]) {
    this.schema = sections;
  }

  toString(indent?: number): string {
    return schemaToString(this.schema, [], { propIndent: indent });
  }
}
