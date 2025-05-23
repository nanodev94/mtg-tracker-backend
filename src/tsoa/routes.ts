/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime'
import { fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime'
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controllers/user/user.controller'
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SetController } from './../controllers/set/set.controller'
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CardController } from './../controllers/card/card.controller'
import { expressAuthentication } from './../authentication'
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express'

const expressAuthenticationRecasted = expressAuthentication as (
  req: ExRequest,
  securityName: string,
  scopes?: string[],
  res?: ExResponse
) => Promise<any>

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  '_36_Enums.UiMode': {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['AUTO'] },
        { dataType: 'enum', enums: ['LIGHT'] },
        { dataType: 'enum', enums: ['DARK'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  UiMode: {
    dataType: 'refAlias',
    type: { ref: '_36_Enums.UiMode', validators: {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PutUserDto: {
    dataType: 'refObject',
    properties: {
      languageCode: { dataType: 'string', required: true },
      uiMode: { ref: 'UiMode', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PutUserBody: {
    dataType: 'refObject',
    properties: {
      languageCode: { dataType: 'string' },
      uiMode: { ref: 'UiMode' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PostRegisterDto: {
    dataType: 'refObject',
    properties: {
      id: { dataType: 'double', required: true },
      email: { dataType: 'string', required: true },
      uiMode: { ref: 'UiMode', required: true },
      languageCode: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PostRegisterBody: {
    dataType: 'refObject',
    properties: {
      email: { dataType: 'string', required: true },
      password: { dataType: 'string', required: true },
      languageCode: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PostLoginDto: {
    dataType: 'refObject',
    properties: {
      id: { dataType: 'double', required: true },
      email: { dataType: 'string', required: true },
      uiMode: { ref: 'UiMode', required: true },
      languageCode: { dataType: 'string', required: true },
      token: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PostLoginBody: {
    dataType: 'refObject',
    properties: {
      email: { dataType: 'string', required: true },
      password: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetUserCardsDto: {
    dataType: 'refObject',
    properties: {
      cards: {
        dataType: 'array',
        array: {
          dataType: 'nestedObjectLiteral',
          nestedProperties: {
            amount: { dataType: 'double', required: true },
            treatment: { dataType: 'string', required: true },
            cardId: { dataType: 'double', required: true },
          },
        },
        required: true,
      },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetUserCardsQueryParams: {
    dataType: 'refObject',
    properties: {
      setIds: { dataType: 'array', array: { dataType: 'double' } },
      cardIds: { dataType: 'array', array: { dataType: 'double' } },
      treatments: { dataType: 'array', array: { dataType: 'string' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  AddUserCardDto: {
    dataType: 'refObject',
    properties: {
      userId: { dataType: 'double', required: true },
      cardId: { dataType: 'double', required: true },
      treatment: { dataType: 'string', required: true },
      amount: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  RemoveUserCardDto: {
    dataType: 'refObject',
    properties: {
      userId: { dataType: 'double', required: true },
      cardId: { dataType: 'double', required: true },
      treatment: { dataType: 'string', required: true },
      amount: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetSetsWithProgressDto: {
    dataType: 'refObject',
    properties: {
      sets: {
        dataType: 'array',
        array: {
          dataType: 'nestedObjectLiteral',
          nestedProperties: {
            progress: { dataType: 'double', required: true },
            releasedAt: { dataType: 'datetime', required: true },
            extraCards: { dataType: 'double', required: true },
            totalCards: { dataType: 'double', required: true },
            mythicCardsCount: { dataType: 'double', required: true },
            rareCardsCount: { dataType: 'double', required: true },
            uncommonCardsCount: { dataType: 'double', required: true },
            commonCardsCount: { dataType: 'double', required: true },
            landCardsCount: { dataType: 'double', required: true },
            colorlessCardsCount: { dataType: 'double', required: true },
            blueCardsCount: { dataType: 'double', required: true },
            greenCardsCount: { dataType: 'double', required: true },
            redCardsCount: { dataType: 'double', required: true },
            whiteCardsCount: { dataType: 'double', required: true },
            blackCardsCount: { dataType: 'double', required: true },
            tokenCardsCount: { dataType: 'double', required: true },
            artCardsCount: { dataType: 'double', required: true },
            isCommander: { dataType: 'boolean', required: true },
            name: { dataType: 'string', required: true },
            code: { dataType: 'string', required: true },
            id: { dataType: 'double', required: true },
          },
        },
        required: true,
      },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetSetsQueryParams: {
    dataType: 'refObject',
    properties: {
      name: { dataType: 'string' },
      page: { dataType: 'double' },
      resultsPerPage: { dataType: 'double' },
      sortField: { dataType: 'string' },
      sortDir: { dataType: 'enum', enums: ['ASC', 'DESC'] },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetSetsDto: {
    dataType: 'refObject',
    properties: {
      sets: {
        dataType: 'array',
        array: {
          dataType: 'nestedObjectLiteral',
          nestedProperties: {
            releasedAt: { dataType: 'datetime', required: true },
            extraCards: { dataType: 'double', required: true },
            totalCards: { dataType: 'double', required: true },
            mythicCardsCount: { dataType: 'double', required: true },
            rareCardsCount: { dataType: 'double', required: true },
            uncommonCardsCount: { dataType: 'double', required: true },
            commonCardsCount: { dataType: 'double', required: true },
            landCardsCount: { dataType: 'double', required: true },
            colorlessCardsCount: { dataType: 'double', required: true },
            blueCardsCount: { dataType: 'double', required: true },
            greenCardsCount: { dataType: 'double', required: true },
            redCardsCount: { dataType: 'double', required: true },
            whiteCardsCount: { dataType: 'double', required: true },
            blackCardsCount: { dataType: 'double', required: true },
            tokenCardsCount: { dataType: 'double', required: true },
            artCardsCount: { dataType: 'double', required: true },
            isCommander: { dataType: 'boolean', required: true },
            name: { dataType: 'string', required: true },
            code: { dataType: 'string', required: true },
            id: { dataType: 'double', required: true },
          },
        },
        required: true,
      },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetSetDto: {
    dataType: 'refObject',
    properties: {
      id: { dataType: 'double', required: true },
      code: { dataType: 'string', required: true },
      name: { dataType: 'string', required: true },
      isCommander: { dataType: 'boolean', required: true },
      artCardsCount: { dataType: 'double', required: true },
      tokenCardsCount: { dataType: 'double', required: true },
      blackCardsCount: { dataType: 'double', required: true },
      whiteCardsCount: { dataType: 'double', required: true },
      redCardsCount: { dataType: 'double', required: true },
      greenCardsCount: { dataType: 'double', required: true },
      blueCardsCount: { dataType: 'double', required: true },
      colorlessCardsCount: { dataType: 'double', required: true },
      landCardsCount: { dataType: 'double', required: true },
      commonCardsCount: { dataType: 'double', required: true },
      uncommonCardsCount: { dataType: 'double', required: true },
      rareCardsCount: { dataType: 'double', required: true },
      mythicCardsCount: { dataType: 'double', required: true },
      totalCards: { dataType: 'double', required: true },
      extraCards: { dataType: 'double', required: true },
      releasedAt: { dataType: 'datetime', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetArtistsDto: {
    dataType: 'refObject',
    properties: {
      artists: { dataType: 'array', array: { dataType: 'string' }, required: true },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  '_36_Enums.Color': {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['BLACK'] },
        { dataType: 'enum', enums: ['WHITE'] },
        { dataType: 'enum', enums: ['RED'] },
        { dataType: 'enum', enums: ['BLUE'] },
        { dataType: 'enum', enums: ['GREEN'] },
        { dataType: 'enum', enums: ['COLORLESS'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Color: {
    dataType: 'refAlias',
    type: { ref: '_36_Enums.Color', validators: {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  '_36_Enums.Rarity': {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['COMMON'] },
        { dataType: 'enum', enums: ['UNCOMMON'] },
        { dataType: 'enum', enums: ['RARE'] },
        { dataType: 'enum', enums: ['MYTHIC'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Rarity: {
    dataType: 'refAlias',
    type: { ref: '_36_Enums.Rarity', validators: {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetArtistsQueryParams: {
    dataType: 'refObject',
    properties: {
      colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
      types: { dataType: 'array', array: { dataType: 'string' } },
      subtypes: { dataType: 'array', array: { dataType: 'string' } },
      rarities: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Rarity' } },
      keywords: { dataType: 'array', array: { dataType: 'string' } },
      treatments: { dataType: 'array', array: { dataType: 'string' } },
      setIds: { dataType: 'array', array: { dataType: 'double' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetTypesDto: {
    dataType: 'refObject',
    properties: {
      types: { dataType: 'array', array: { dataType: 'string' }, required: true },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetTypesQueryParams: {
    dataType: 'refObject',
    properties: {
      colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
      subtypes: { dataType: 'array', array: { dataType: 'string' } },
      rarities: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Rarity' } },
      keywords: { dataType: 'array', array: { dataType: 'string' } },
      artists: { dataType: 'array', array: { dataType: 'string' } },
      treatments: { dataType: 'array', array: { dataType: 'string' } },
      setIds: { dataType: 'array', array: { dataType: 'double' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetSubtypesDto: {
    dataType: 'refObject',
    properties: {
      subtypes: { dataType: 'array', array: { dataType: 'string' }, required: true },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetSubtypesQueryParams: {
    dataType: 'refObject',
    properties: {
      colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
      types: { dataType: 'array', array: { dataType: 'string' } },
      rarities: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Rarity' } },
      keywords: { dataType: 'array', array: { dataType: 'string' } },
      artists: { dataType: 'array', array: { dataType: 'string' } },
      treatments: { dataType: 'array', array: { dataType: 'string' } },
      setIds: { dataType: 'array', array: { dataType: 'double' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetKeywordsDto: {
    dataType: 'refObject',
    properties: {
      keywords: { dataType: 'array', array: { dataType: 'string' }, required: true },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetKeywordsQueryParams: {
    dataType: 'refObject',
    properties: {
      colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
      types: { dataType: 'array', array: { dataType: 'string' } },
      subtypes: { dataType: 'array', array: { dataType: 'string' } },
      rarities: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Rarity' } },
      artists: { dataType: 'array', array: { dataType: 'string' } },
      treatments: { dataType: 'array', array: { dataType: 'string' } },
      setIds: { dataType: 'array', array: { dataType: 'double' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetTreatmentsDto: {
    dataType: 'refObject',
    properties: {
      treatments: { dataType: 'array', array: { dataType: 'string' }, required: true },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetTreatmentsQueryParams: {
    dataType: 'refObject',
    properties: {
      colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
      types: { dataType: 'array', array: { dataType: 'string' } },
      subtypes: { dataType: 'array', array: { dataType: 'string' } },
      rarities: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Rarity' } },
      keywords: { dataType: 'array', array: { dataType: 'string' } },
      artists: { dataType: 'array', array: { dataType: 'string' } },
      setIds: { dataType: 'array', array: { dataType: 'double' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetCardsDto: {
    dataType: 'refObject',
    properties: {
      cards: {
        dataType: 'array',
        array: {
          dataType: 'nestedObjectLiteral',
          nestedProperties: {
            alternatives: { dataType: 'array', array: { dataType: 'double' } },
            treatments: { dataType: 'array', array: { dataType: 'string' } },
            copyright: { dataType: 'string' },
            artist: { dataType: 'string' },
            loyalty: { dataType: 'string' },
            defense: { dataType: 'string' },
            power: { dataType: 'string' },
            keywords: { dataType: 'array', array: { dataType: 'string' } },
            isStorySpotlight: { dataType: 'boolean' },
            isBuyABox: { dataType: 'boolean' },
            isBundle: { dataType: 'boolean' },
            isPromo: { dataType: 'boolean' },
            isExtra: { dataType: 'boolean' },
            rarity: { ref: 'Rarity' },
            subtypes: { dataType: 'array', array: { dataType: 'string' } },
            types: { dataType: 'array', array: { dataType: 'string' } },
            mana: { dataType: 'string' },
            colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
            lore: { dataType: 'string' },
            description: { dataType: 'string' },
            name: { dataType: 'string', required: true },
            setNumber: { dataType: 'double', required: true },
            setId: { dataType: 'double', required: true },
            id: { dataType: 'double', required: true },
          },
        },
        required: true,
      },
      count: { dataType: 'double', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetCardsQueryParams: {
    dataType: 'refObject',
    properties: {
      name: { dataType: 'string' },
      colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
      types: { dataType: 'array', array: { dataType: 'string' } },
      subtypes: { dataType: 'array', array: { dataType: 'string' } },
      rarities: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Rarity' } },
      keywords: { dataType: 'array', array: { dataType: 'string' } },
      artists: { dataType: 'array', array: { dataType: 'string' } },
      treatments: { dataType: 'array', array: { dataType: 'string' } },
      setIds: { dataType: 'array', array: { dataType: 'double' } },
      page: { dataType: 'double' },
      resultsPerPage: { dataType: 'double' },
      sortField: { dataType: 'string' },
      sortDir: { dataType: 'enum', enums: ['ASC', 'DESC'] },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GetCardDto: {
    dataType: 'refObject',
    properties: {
      id: { dataType: 'double', required: true },
      setId: { dataType: 'double', required: true },
      setNumber: { dataType: 'double', required: true },
      name: { dataType: 'string', required: true },
      description: { dataType: 'string' },
      lore: { dataType: 'string' },
      colors: { dataType: 'array', array: { dataType: 'refAlias', ref: 'Color' } },
      mana: { dataType: 'string' },
      types: { dataType: 'array', array: { dataType: 'string' } },
      subtypes: { dataType: 'array', array: { dataType: 'string' } },
      rarity: { ref: 'Rarity' },
      isExtra: { dataType: 'boolean' },
      isPromo: { dataType: 'boolean' },
      isBundle: { dataType: 'boolean' },
      isBuyABox: { dataType: 'boolean' },
      isStorySpotlight: { dataType: 'boolean' },
      keywords: { dataType: 'array', array: { dataType: 'string' } },
      power: { dataType: 'string' },
      defense: { dataType: 'string' },
      loyalty: { dataType: 'string' },
      artist: { dataType: 'string' },
      copyright: { dataType: 'string' },
      treatments: { dataType: 'array', array: { dataType: 'string' } },
      alternatives: { dataType: 'array', array: { dataType: 'double' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
const templateService = new ExpressTemplateService(models, {
  noImplicitAdditionalProperties: 'throw-on-extras',
  bodyCoercion: true,
})

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################

  const argsUserController_putUser: Record<string, TsoaRoute.ParameterSchema> = {
    req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    body: { in: 'body', name: 'body', required: true, ref: 'PutUserBody' },
  }
  app.put(
    '/api/v1/users',
    authenticateMiddleware([{ jwt: [] }]),
    ...fetchMiddlewares<RequestHandler>(UserController),
    ...fetchMiddlewares<RequestHandler>(UserController.prototype.putUser),

    async function UserController_putUser(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsUserController_putUser,
          request,
          response,
        })

        const controller = new UserController()

        await templateService.apiHandler({
          methodName: 'putUser',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsUserController_postRegister: Record<string, TsoaRoute.ParameterSchema> = {
    body: { in: 'body', name: 'body', required: true, ref: 'PostRegisterBody' },
  }
  app.post(
    '/api/v1/users/register',
    ...fetchMiddlewares<RequestHandler>(UserController),
    ...fetchMiddlewares<RequestHandler>(UserController.prototype.postRegister),

    async function UserController_postRegister(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsUserController_postRegister,
          request,
          response,
        })

        const controller = new UserController()

        await templateService.apiHandler({
          methodName: 'postRegister',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsUserController_postLogin: Record<string, TsoaRoute.ParameterSchema> = {
    body: { in: 'body', name: 'body', required: true, ref: 'PostLoginBody' },
  }
  app.post(
    '/api/v1/users/login',
    ...fetchMiddlewares<RequestHandler>(UserController),
    ...fetchMiddlewares<RequestHandler>(UserController.prototype.postLogin),

    async function UserController_postLogin(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsUserController_postLogin,
          request,
          response,
        })

        const controller = new UserController()

        await templateService.apiHandler({
          methodName: 'postLogin',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsUserController_getUserCards: Record<string, TsoaRoute.ParameterSchema> = {
    req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    queryParams: {
      in: 'queries',
      name: 'queryParams',
      required: true,
      ref: 'GetUserCardsQueryParams',
    },
  }
  app.get(
    '/api/v1/users/cards',
    authenticateMiddleware([{ jwt: [] }]),
    ...fetchMiddlewares<RequestHandler>(UserController),
    ...fetchMiddlewares<RequestHandler>(UserController.prototype.getUserCards),

    async function UserController_getUserCards(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsUserController_getUserCards,
          request,
          response,
        })

        const controller = new UserController()

        await templateService.apiHandler({
          methodName: 'getUserCards',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsUserController_addUserCard: Record<string, TsoaRoute.ParameterSchema> = {
    req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    cardId: { in: 'path', name: 'cardId', required: true, dataType: 'double' },
    treatment: { in: 'path', name: 'treatment', required: true, dataType: 'string' },
  }
  app.put(
    '/api/v1/users/addCard/:cardId/:treatment',
    authenticateMiddleware([{ jwt: [] }]),
    ...fetchMiddlewares<RequestHandler>(UserController),
    ...fetchMiddlewares<RequestHandler>(UserController.prototype.addUserCard),

    async function UserController_addUserCard(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsUserController_addUserCard,
          request,
          response,
        })

        const controller = new UserController()

        await templateService.apiHandler({
          methodName: 'addUserCard',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsUserController_removeUserCard: Record<string, TsoaRoute.ParameterSchema> = {
    req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    cardId: { in: 'path', name: 'cardId', required: true, dataType: 'double' },
    treatment: { in: 'path', name: 'treatment', required: true, dataType: 'string' },
  }
  app.put(
    '/api/v1/users/removeCard/:cardId/:treatment',
    authenticateMiddleware([{ jwt: [] }]),
    ...fetchMiddlewares<RequestHandler>(UserController),
    ...fetchMiddlewares<RequestHandler>(UserController.prototype.removeUserCard),

    async function UserController_removeUserCard(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsUserController_removeUserCard,
          request,
          response,
        })

        const controller = new UserController()

        await templateService.apiHandler({
          methodName: 'removeUserCard',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsSetController_getSetsWithProgress: Record<string, TsoaRoute.ParameterSchema> = {
    req: { in: 'request', name: 'req', required: true, dataType: 'object' },
    queryParams: { in: 'queries', name: 'queryParams', required: true, ref: 'GetSetsQueryParams' },
  }
  app.get(
    '/api/v1/sets/withProgress',
    authenticateMiddleware([{ jwt: [] }]),
    ...fetchMiddlewares<RequestHandler>(SetController),
    ...fetchMiddlewares<RequestHandler>(SetController.prototype.getSetsWithProgress),

    async function SetController_getSetsWithProgress(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsSetController_getSetsWithProgress,
          request,
          response,
        })

        const controller = new SetController()

        await templateService.apiHandler({
          methodName: 'getSetsWithProgress',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsSetController_getSets: Record<string, TsoaRoute.ParameterSchema> = {
    queryParams: { in: 'queries', name: 'queryParams', required: true, ref: 'GetSetsQueryParams' },
  }
  app.get(
    '/api/v1/sets',
    ...fetchMiddlewares<RequestHandler>(SetController),
    ...fetchMiddlewares<RequestHandler>(SetController.prototype.getSets),

    async function SetController_getSets(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsSetController_getSets,
          request,
          response,
        })

        const controller = new SetController()

        await templateService.apiHandler({
          methodName: 'getSets',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsSetController_getSet: Record<string, TsoaRoute.ParameterSchema> = {
    setId: { in: 'path', name: 'setId', required: true, dataType: 'double' },
  }
  app.get(
    '/api/v1/sets/:setId',
    ...fetchMiddlewares<RequestHandler>(SetController),
    ...fetchMiddlewares<RequestHandler>(SetController.prototype.getSet),

    async function SetController_getSet(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsSetController_getSet,
          request,
          response,
        })

        const controller = new SetController()

        await templateService.apiHandler({
          methodName: 'getSet',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCardController_getArtists: Record<string, TsoaRoute.ParameterSchema> = {
    queryParams: {
      in: 'queries',
      name: 'queryParams',
      required: true,
      ref: 'GetArtistsQueryParams',
    },
  }
  app.get(
    '/api/v1/cards/artists',
    ...fetchMiddlewares<RequestHandler>(CardController),
    ...fetchMiddlewares<RequestHandler>(CardController.prototype.getArtists),

    async function CardController_getArtists(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCardController_getArtists,
          request,
          response,
        })

        const controller = new CardController()

        await templateService.apiHandler({
          methodName: 'getArtists',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCardController_getTypes: Record<string, TsoaRoute.ParameterSchema> = {
    queryParams: { in: 'queries', name: 'queryParams', required: true, ref: 'GetTypesQueryParams' },
  }
  app.get(
    '/api/v1/cards/types',
    ...fetchMiddlewares<RequestHandler>(CardController),
    ...fetchMiddlewares<RequestHandler>(CardController.prototype.getTypes),

    async function CardController_getTypes(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCardController_getTypes,
          request,
          response,
        })

        const controller = new CardController()

        await templateService.apiHandler({
          methodName: 'getTypes',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCardController_getSubtypes: Record<string, TsoaRoute.ParameterSchema> = {
    queryParams: {
      in: 'queries',
      name: 'queryParams',
      required: true,
      ref: 'GetSubtypesQueryParams',
    },
  }
  app.get(
    '/api/v1/cards/subtypes',
    ...fetchMiddlewares<RequestHandler>(CardController),
    ...fetchMiddlewares<RequestHandler>(CardController.prototype.getSubtypes),

    async function CardController_getSubtypes(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCardController_getSubtypes,
          request,
          response,
        })

        const controller = new CardController()

        await templateService.apiHandler({
          methodName: 'getSubtypes',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCardController_getKeywords: Record<string, TsoaRoute.ParameterSchema> = {
    queryParams: {
      in: 'queries',
      name: 'queryParams',
      required: true,
      ref: 'GetKeywordsQueryParams',
    },
  }
  app.get(
    '/api/v1/cards/keywords',
    ...fetchMiddlewares<RequestHandler>(CardController),
    ...fetchMiddlewares<RequestHandler>(CardController.prototype.getKeywords),

    async function CardController_getKeywords(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCardController_getKeywords,
          request,
          response,
        })

        const controller = new CardController()

        await templateService.apiHandler({
          methodName: 'getKeywords',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCardController_getTreatments: Record<string, TsoaRoute.ParameterSchema> = {
    queryParams: {
      in: 'queries',
      name: 'queryParams',
      required: true,
      ref: 'GetTreatmentsQueryParams',
    },
  }
  app.get(
    '/api/v1/cards/treatments',
    ...fetchMiddlewares<RequestHandler>(CardController),
    ...fetchMiddlewares<RequestHandler>(CardController.prototype.getTreatments),

    async function CardController_getTreatments(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCardController_getTreatments,
          request,
          response,
        })

        const controller = new CardController()

        await templateService.apiHandler({
          methodName: 'getTreatments',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCardController_getCards: Record<string, TsoaRoute.ParameterSchema> = {
    languageCode: { in: 'path', name: 'languageCode', required: true, dataType: 'string' },
    queryParams: { in: 'queries', name: 'queryParams', required: true, ref: 'GetCardsQueryParams' },
  }
  app.get(
    '/api/v1/cards/:languageCode',
    ...fetchMiddlewares<RequestHandler>(CardController),
    ...fetchMiddlewares<RequestHandler>(CardController.prototype.getCards),

    async function CardController_getCards(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCardController_getCards,
          request,
          response,
        })

        const controller = new CardController()

        await templateService.apiHandler({
          methodName: 'getCards',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCardController_getCard: Record<string, TsoaRoute.ParameterSchema> = {
    languageCode: { in: 'path', name: 'languageCode', required: true, dataType: 'string' },
    cardId: { in: 'path', name: 'cardId', required: true, dataType: 'double' },
  }
  app.get(
    '/api/v1/cards/:languageCode/:cardId',
    ...fetchMiddlewares<RequestHandler>(CardController),
    ...fetchMiddlewares<RequestHandler>(CardController.prototype.getCard),

    async function CardController_getCard(request: ExRequest, response: ExResponse, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = []
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCardController_getCard,
          request,
          response,
        })

        const controller = new CardController()

        await templateService.apiHandler({
          methodName: 'getCard',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        })
      } catch (err) {
        return next(err)
      }
    }
  )
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
    return async function runAuthenticationMiddleware(request: any, response: any, next: any) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      // keep track of failed auth attempts so we can hand back the most
      // recent one.  This behavior was previously existing so preserving it
      // here
      const failedAttempts: any[] = []
      const pushAndRethrow = (error: any) => {
        failedAttempts.push(error)
        throw error
      }

      const secMethodOrPromises: Promise<any>[] = []
      for (const secMethod of security) {
        if (Object.keys(secMethod).length > 1) {
          const secMethodAndPromises: Promise<any>[] = []

          for (const name in secMethod) {
            secMethodAndPromises.push(
              expressAuthenticationRecasted(request, name, secMethod[name], response).catch(
                pushAndRethrow
              )
            )
          }

          // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

          secMethodOrPromises.push(
            Promise.all(secMethodAndPromises).then((users) => {
              return users[0]
            })
          )
        } else {
          for (const name in secMethod) {
            secMethodOrPromises.push(
              expressAuthenticationRecasted(request, name, secMethod[name], response).catch(
                pushAndRethrow
              )
            )
          }
        }
      }

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      try {
        request['user'] = await Promise.any(secMethodOrPromises)

        // Response was sent in middleware, abort
        if (response.writableEnded) {
          return
        }

        next()
      } catch (err) {
        // Show most recent error as response
        const error = failedAttempts.pop()
        error.status = error.status || 401

        // Response was sent in middleware, abort
        if (response.writableEnded) {
          return
        }
        next(error)
      }

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
